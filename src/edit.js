import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

function Edit( { attributes, setAttributes, categories } ) {

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onChangeDescription = ( value ) => {
		setAttributes( { description: value } );
	};

	const { className} = attributes;

	// The current post's categories are now available as a prop
    const classCategory = categories.length > 0 ? categories[0].slug : 'default-class';
	useEffect(() => {
		if (categories.length > 0) {
		  setAttributes({ classCategory: categories[0].slug });
		}
		if (classCategory !== className) {
            setAttributes({ className: classCategory });
        }
	  }, [categories, classCategory, className,  setAttributes]);


	return (
		<div { ...useBlockProps() }  className={classCategory}>
			<span>Current Category: {classCategory}</span><br/>
			<span>Current CSS Class: {className}</span><br/>
			<italic>If you changed your main category and it doesn't match with out palette color, please reload your editor and update to view your changes in front-end.</italic>
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