import React from 'react';

class Form extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    const formData = {
      title: this.title.value,
      content: this.content.value
    };
    this.props.submitForm(formData, this.props.form.id);
  }

  render() {
    const { form } = this.props;

    return (
      <div className="note-container">
        <form
          className="form-form"
          onSubmit={(e) => this.onSubmit(e)}
        >
          <input
            className="form-title-input"
            type="text"
            placeholder="Form Title..."
            defaultValue={form.title}
            ref={(input) => this.title = input}
          />
          <textarea
            className="form-textarea"
            placeholder="Type Here..."
            defaultValue={form.content}
            ref={(input) => this.content = input}
          />
          <input className="form-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
