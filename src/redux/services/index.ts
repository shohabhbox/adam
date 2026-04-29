import { _delete } from './delete.services';
import { get } from './get.services';
import { patch, update } from './patch.services';
import { formDataPost, post, put } from './post.services';

const Service = {
  formDataPost,
  update,
  patch,
  get,
  post,
  put,
  _delete,
};

export default Service;
