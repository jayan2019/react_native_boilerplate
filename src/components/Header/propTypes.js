import PropTypes from "prop-types";

const propTypes = {
  headerTitle: PropTypes.string,
  leftButtonPress: PropTypes.func,
  rightButtonPress: PropTypes.func,
  disableLeft: PropTypes.bool,
  enableRight: PropTypes.bool,
  leftIconName: PropTypes.string
};

export default propTypes;
