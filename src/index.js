/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	// This ensures the block can only be used once per post.<---------
	supports: {
        multiple: false, 
    },
} );

const { addFilter } = wp.hooks;
const { select } = wp.data;

//Disable block on post type
addFilter(
    'editor.BlockListBlock',
    'my-plugin/with-inspector-controls',
    function( BlockListBlock ) {
        return function( props ) {
            if ( props.name === 'create-block/claro-plugin' && select( 'core/editor' ).getCurrentPostType() !== 'post' ) {
                return null;
            }
            return <BlockListBlock { ...props } />;
        };
    }
);
