import { Components, registerComponent, withMessages } from 'meteor/vulcan:core';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Comments } from '../../modules/comments/index.js';
import moment from 'moment';
import Users from 'meteor/vulcan:users';

class CommentsItem extends PureComponent {
  constructor() {
    super();
    this.state = {
      showReply: false,
      showEdit: false,
    };
  }

  showReply = event => {
    event.preventDefault();
    this.setState({ showReply: true });
  };

  replyCancelCallback = () => {
    this.setState({ showReply: false });
  };

  replySuccessCallback = () => {
    this.setState({ showReply: false });
  };

  showEdit = event => {
    event.preventDefault();
    this.setState({ showEdit: true });
  };

  editCancelCallback = () => {
    this.setState({ showEdit: false });
  };

  editSuccessCallback = () => {
    this.setState({ showEdit: false });
  };

  removeSuccessCallback = ({ documentId }) => {
    this.props.flash({ id: 'comments.delete_success', type: 'success' });
  };

  renderComment() {
    const htmlBody = { __html: this.props.comment.htmlBody };

    const showReplyButton = !this.props.comment.isDeleted && !!this.props.currentUser;

    return (
      <div className="text-left">
        <div dangerouslySetInnerHTML={htmlBody}></div>
        {showReplyButton ? (
          <Components.Button variant="primary-link" size="small" className="pl-0" onClick={this.showReply}>
            <Components.Icon name="reply" />
            <FormattedMessage id="comments.reply" />
          </Components.Button>
        ) : null}
      </div>
    );
  }

  renderReply() {
    return (
      <div className="comments-item-reply mt-2">
        <Components.CommentsNewForm
          postId={this.props.comment.postId}
          parentComment={this.props.comment}
          successCallback={this.replySuccessCallback}
          cancelCallback={this.replyCancelCallback}
          type="reply"
        />
      </div>
    );
  }

  renderEdit() {
    return (
      <Components.CommentsEditForm
        comment={this.props.comment}
        successCallback={this.editSuccessCallback}
        cancelCallback={this.editCancelCallback}
        removeSuccessCallback={this.removeSuccessCallback}
      />
    );
  }

  render() {
    const { comment, currentUser } = this.props;

    return (
      <div className="comments-item" id={comment._id}>
        <div className="mb-3">
          <div className="d-flex">
            <Components.UsersAvatar size="small" user={comment.user} />
            <div className="ml-1 w-100">
              <div className="d-flex middle-xs posted-at mb-1">
                <span className="mr-xs">
                  <Components.UsersName user={comment.user} />
                </span>
                <small>{moment(new Date(comment.postedAt)).fromNow()}</small>

                {Users.canUpdate({ collection: Comments, user: currentUser, document: comment }) && (
                  <Components.Button variant="primary-link" size="small" className="ml-1" onClick={this.showEdit}>
                    <Components.Icon name="edit" />
                    <FormattedMessage id="comments.edit" />
                  </Components.Button>
                )}
              </div>
              {this.state.showEdit ? this.renderEdit() : this.renderComment()}
            </div>
          </div>
          {this.state.showReply ? this.renderReply() : null}
        </div>
      </div>
    );
  }
}

CommentsItem.propTypes = {
  comment: PropTypes.object.isRequired, // the current comment
  currentUser: PropTypes.object,
  flash: PropTypes.func,
};

registerComponent({ name: 'CommentsItem', component: CommentsItem, hocs: [withMessages] });
