import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import { Icon, Icons } from '@/components';
import styles from './styles';
import MemberItem from '@/components/MemberItem';
import InvitationSentModal from '@/components/modal/InvitationSentModal';
import MarkCompleteModal from '@/components/modal/MarkCompleteModal';
import DeleteTripModal from '@/components/modal/DeleteTripModal';
import TransferOwnershipModal from '@/components/modal/TransferOwnershipModal';
import TripActivityModal from '@/components/modal/TripActivityModal';

const members = [
  {
    id: '1',
    name: 'Emily Johnson',
    email: 'emily.johnson@com',
    role: 'Owner',
    date: 'Creator',
  },
  {
    id: '2',
    name: 'Sophia Williams',
    email: 'sophia.williams@com',
    role: 'Editor',
    date: 'Mar 12',
  },
  {
    id: '3',
    name: 'James Anderson',
    email: 'james.anderson@com',
    role: 'Editor',
    date: 'Mar 14',
  },
  {
    id: '4',
    name: 'Oliver Thompson',
    email: 'oliver.thompson@com',
    role: 'Viewer',
    date: 'Mar 18',
  },
];

const ManageMembersScreen = () => {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const [markCompleteVisible, setMarkCompleteVisible] = useState(false);
  const [deleteTripVisible, setDeleteTripVisible] = useState(false);
  const [transferOwnershipVisible, setTransferOwnershipVisible] =
    useState(false);

  const [activityVisible, setActivityVisible] = useState(false);

  function handleRemove(member) {
    // Handle member removal logic here
  }
  function handleDeleteTrip() {
    setDeleteTripVisible(!deleteTripVisible);
  }

  function handleTransferOwnership() {
    setTransferOwnershipVisible(!transferOwnershipVisible);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon type={Icons.Ionicons} name="arrow-back" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Manage Members</Text>

        <TouchableOpacity style={styles.deleteBtn} onPress={handleDeleteTrip}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>

      {/* TOP CONTENT */}
      <View style={styles.topContent}>
        <View style={styles.tripCard}>
          <Text style={styles.tripTitle}>Greece Island Hop</Text>
          <Text style={styles.tripSub}>May 18 – Jun 2 · 4 members</Text>
        </View>

        <TouchableOpacity style={styles.inviteLink}>
          <Text style={styles.inviteText}>Invite via Link</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Invite via Email</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="email@example.com"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.sendText}>Send Invite</Text>
        </TouchableOpacity>

        <View style={styles.memberHeader}>
          <Text style={styles.sectionTitle}>Members 4</Text>
          <Text onPress={handleTransferOwnership} style={styles.link}>
            Transfer Ownership
          </Text>
        </View>
      </View>

      {/* 🔥 MEMBERS LIST ONLY SCROLLABLE */}
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <MemberItem
            name={item.name}
            email={item.email}
            role={item.role}
            date={item.date}
            onRemove={() => handleRemove(item)}
          />
        )}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => setActivityVisible(true)}
        >
          <Text style={styles.secondaryText}>See Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => setMarkCompleteVisible(true)}
        >
          <Text style={styles.primaryText}>Mark as Completed</Text>
        </TouchableOpacity>
      </View>

      <InvitationSentModal
        visible={visible}
        onClose={() => setVisible(false)}
      />

      <MarkCompleteModal
        visible={markCompleteVisible}
        onClose={() => setMarkCompleteVisible(false)}
        onConfirm={() => {
          // Handle mark as completed logic
        }}
      />

      <DeleteTripModal
        visible={deleteTripVisible}
        onDelete={handleDeleteTrip}
        onClose={handleDeleteTrip}
      />

      <TransferOwnershipModal
        visible={transferOwnershipVisible}
        members={members}
        onTransfer={newOwner => {
          setTransferOwnershipVisible(false);
        }}
        onClose={() => setTransferOwnershipVisible(false)}
      />

      <TripActivityModal
        visible={activityVisible}
        onClose={() => setActivityVisible(false)}
      />
    </View>
  );
};

export default ManageMembersScreen;
