import React from 'react';

/**
 * メニューエディタ
 * @classdesc MenuEditor
 */
export default class MenuEditor extends React.Component {

    /**
     * 
     * @param {Object} props 
     */
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.memoData.title,
            contents: this.props.memoData.contents,
        };

        // 保存ボタン
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        // title状態変更時のハンドリング
        this.handleOnTitleChange = this.handleOnTitleChange.bind(this);
        // contents状態変更時のハンドリング
        this.handleOnContentsChange = this.handleOnContentsChange.bind(this);
    }

    /**
     * 
     * @param {React.Event} e 
     */
    handleSaveButtonClick(e) {
        let memoObj = {
            'key': this.props.memoData.key,
            'title': this.state.title,
            'contents': this.state.contents,
        };
        this.props.saveCardToState(memoObj);
    }

    /**
     *  タイトル変更時のハンドリング
     * @param {React.Event} e
     */
    handleOnTitleChange(e) {
        this.setState({title: e.target.value});
    }

    /**
     * コンテンツ変更時のハンドリング
     * @param {React.Event} e
     */
    handleOnContentsChange(e) {
        this.setState({contents: e.target.value});
    }

    /**
     * propsが更新されたとき
     * - 受け取ったnextPropsのmemoDataで更新する
     * @param {Object} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.memoData.title,
            contents: nextProps.memoData.contents,
        });
    }

    /**
     * @return {React.Component}
     */
    render() {
        return (
            <article className="area_editor">
                <section>
                    <input 
                    value={this.state.title}
                    onChange={this.handleOnTitleChange}
                    />
                </section>
                <section>
                    <textarea 
                        value={this.state.contents}
                        onChange={this.handleOnContentsChange}
                        >
                    </textarea>
                    <button onClick={this.handleSaveButtonClick}>保存</button>
                </section>
            </article>
        );
    }
}
