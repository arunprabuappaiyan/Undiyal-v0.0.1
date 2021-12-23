import Bcrypt from 'bcryptjs';
import moment from 'moment';

const SALT_FACTOR = 10;
export const generatePasswordHash = function (password, callback) {
  let salt = Bcrypt.genSaltSync(SALT_FACTOR);
  let hash = Bcrypt.hashSync(password, salt);
  return callback({ hash: hash });
};

export const buildUsefulErrorObject = (errors) => {
  const usefulErrors = {};
  errors.map((error) => {
    if (!usefulErrors.hasOwnProperty(error.path.join('_'))) {
      usefulErrors[error.path.join('_')] = {
        type: error.type,
        msg: `error.${error.path.join('_')}.${error.type}`,
      };
    }
  });
  return usefulErrors;
};
