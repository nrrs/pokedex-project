import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, { match }) => ({
  item: selectPokemonItem(state, parseInt(match.params.itemId))
});

export default connect(
  mapStateToProps
)(ItemDetail);
