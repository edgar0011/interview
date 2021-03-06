
const utils = {
  isEmail(s) {
    /* eslint no-useless-escape:0 */
    const regexp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return regexp.test(s);
  },

  isPhone(s) {
    /* eslint no-useless-escape:0 */
    const regexp = /^\+[1-9]{1}[( \-){1}0-9]{14}$/;
    return regexp.test(s);
  },
  isTextValid(s) {
    return !!s && s.replace(/\s/g, '').length > 0;
  },
};

export default utils;

