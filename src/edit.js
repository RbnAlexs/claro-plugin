import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onChangeDescription = ( value ) => {
		setAttributes( { description: value } );
	};

	return (
		<div { ...useBlockProps() }  className="my-block-class">
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