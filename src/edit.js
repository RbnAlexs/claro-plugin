import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';

function Edit( { attributes, setAttributes, categories } ) {

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onChangeDescription = ( value ) => {
		setAttributes( { description: value } );
	};


	// The current post's categories are now available as a prop
    const className = categories.length > 0 ? categories[0].slug : 'default-class';


	return (
		<div { ...useBlockProps() }  className={className}>
			<RichText
				tagName="h2"
				value={ attributes.title }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				onChange={ onChangeTitle }
				placeholder={ __( 'Add a title', 'claro-plugin' ) }
			/>
			<RichText
				tagName="p"
				value={ attributes.description }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				onChange={ onChangeDescription }
				placeholder={ __( 'Add a description', 'claro-plugin' ) }
			/>
		</div>
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