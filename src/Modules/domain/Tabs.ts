import { Dimensions } from 'react-native';

import AboutModule from '../../Pages/Detail/About/About.component';
import { PokemonDetail } from './Pokemon';


type SlideProps = {
  pokemonDetail: PokemonDetail;
};

const { width } = Dimensions.get('window');
const TAB_BUTTON_WIDTH = (width - 48) / 4;

export { SlideProps, TAB_BUTTON_WIDTH };
