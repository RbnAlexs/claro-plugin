/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
/*
export default function save() {
	return null;
}
*/
/*
export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Claro Plugin – hello from the saved content!' }
		</p>
	);
}
*/


import { RichText } from '@wordpress/block-editor';


export default function Save( { attributes } ) {

	const {className, classCategory, title, description } = attributes;
	console.log(attributes)
	console.log("classCategory: " + classCategory)
	console.log("className: " + className)

    return (
        <div className={classCategory || className }>
            <RichText.Content
                tagName="h2"
                value={ attributes.title }
            />
            <RichText.Content
                tagName="p"
                value={ attributes.description }
            />
        </div>
    );
}