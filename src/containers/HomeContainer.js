import {connect} from 'react-redux';
import {addToCart} from '../services/actions/actions';
import Home from '../components/Home';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
