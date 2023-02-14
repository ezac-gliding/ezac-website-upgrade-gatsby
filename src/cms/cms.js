import CMS from 'netlify-cms-app';
import { ColorControl, ColorPreview } from 'netlify-cms-widget-colorpicker';
import GliderPreview from '../components/previews/GliderPreview';
import HomepageTextPreview from '../components/previews/HomepageTextPreview';

// These are special imports because Netlify CMS actually sucks and I've lured you into using it
// OK no that's not true but the preview styling really sucks and we have to
// do some ugly imports to make SASS styles work
/* eslint-disable import/no-webpack-loader-syntax */
import constants from '!css-loader!sass-loader!../styles/constants.scss';
import reset from '!css-loader!sass-loader!../styles/reset.scss';
import general from '!css-loader!sass-loader!../styles/general.scss';
import gliderStyles from '!css-loader!sass-loader!../components/glider/glider.scss';
import gliderDetailStyles from '!css-loader!sass-loader!../components/glider/glider-details.scss';
import previewStyles from '!css-loader!sass-loader!../styles/previewStyles.scss';
/* eslint-enable import/no-webpack-loader-syntax */

CMS.registerWidget('color', ColorControl, ColorPreview);

// Register the custom previews styles
CMS.registerPreviewStyle(gliderStyles.toString(), { raw: true });
CMS.registerPreviewStyle(gliderDetailStyles.toString(), { raw: true });
CMS.registerPreviewStyle(constants.toString(), { raw: true });
CMS.registerPreviewStyle(reset.toString(), { raw: true });
CMS.registerPreviewStyle(general.toString(), { raw: true });
CMS.registerPreviewStyle(previewStyles.toString(), { raw: true });

// Register custom preview components
CMS.registerPreviewTemplate('glider', GliderPreview);
CMS.registerPreviewTemplate('homepage-text', HomepageTextPreview);
