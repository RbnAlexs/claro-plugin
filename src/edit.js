/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
/*
export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'AMX Plugin – hello from the editor!', 'claro-plugin' ) }
		</p>
	);
}
*/


import { withSelect } from '@wordpress/data';

function Edit( { categories } ) {

	const categorySlugs = categories.map( category => category.slug ).join(', ');
	console.log(categorySlugs);

	return (
		<p { ...useBlockProps() }>
			{/* __( 'AMX Plugin – hello from the editor!', 'claro-plugin' ) */}
			{ __( ' Categories: ', 'claro-plugin' ) } { categorySlugs }
		</p>
	);
}

export default withSelect( ( select ) => {
	const { getEntityRecords } = select( 'core' );
	const postID = select( 'core/editor' ).getCurrentPostId();
	const categories = getEntityRecords( 'taxonomy', 'category', { post: postID } );

	return {
		categories: categories || [],
	};
} )( Edit );