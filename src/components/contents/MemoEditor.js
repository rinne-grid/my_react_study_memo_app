import React from 'react';

/**
 * @classdesc MenuEditor
 */
export default class MenuEditor extends React.Component {
    /**
     * 
     * @param {Object} props 
     */
    constructor(props) {
        super(props);
    }
    /**
     * @return {React.Component}
     */
    render() {
        let editorTitle = '';
        let editorContents = '';
        if(this.props.memoData !== undefined) {
            editorTitle = this.props.memoData.title;
            editorContents = this.props.memoData.contents;
        }
        return (
            <article className="area_editor">
                <section>
                    <h1>{editorTitle}</h1>
                </section>
                <section>
                    <p>{editorContents}</p>
                </section>
            </article>
        );
    }
}
