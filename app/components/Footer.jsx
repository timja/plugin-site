import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import styles from '../styles/Main.css';
import PluginLink from './PluginLink';
import { actions } from '../actions';
import { categories, newly, trend, updated } from '../selectors';
import { createSelector } from 'reselect';

class Footer extends React.PureComponent {

  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      labels: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired
    })).isRequired,
    newly: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })).isRequired,
    trend: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })).isRequired,
    updated: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })).isRequired,
    setCategory: PropTypes.func.isRequired
  }

  handleOnClick = (event) => {
    event.preventDefault();
    const categoryId = event.target.getAttribute('data-id');
    this.props.setCategory(categoryId);
  }

  render() {
    return(
      <div className="NoLabels">
        <div className="container">
          <div className="row">
            <div className={classNames(styles.NoLabels, 'col-md-3 NoLabels')}>
              <fieldset>
                <legend>Browse categories</legend>
                { this.props.categories.map((category) => {
                  return(
                    <div key={`cat-box-id-${category.id}`} className="Entry-box">
                      <a href="#" onClick={this.handleOnClick} data-id={category.id}>{category.title}</a>
                   </div>
                 );
                })}
              </fieldset>
            </div>
            <div className="col-md-3">
              <fieldset>
                <legend>New Plugins</legend>
                { this.props.newly.map((plugin) => {
                  return <PluginLink key={plugin.name} name={plugin.name} title={plugin.title} />;
                })}
              </fieldset>
            </div>
            <div className="col-md-3">
              <fieldset>
                <legend>Recently updated</legend>
                { this.props.updated.map((plugin) => {
                  return <PluginLink key={plugin.name} name={plugin.name} title={plugin.title} />;
                })}
              </fieldset>
            </div>
            <div className="col-md-3">
              <fieldset>
                <legend>Trending</legend>
                { this.props.trend.map((plugin) => {
                  return <PluginLink key={plugin.name} name={plugin.name} title={plugin.title} />;
                })}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const selectors = createSelector(
  [ categories, newly, trend, updated ],
  ( categories, newly, trend, updated ) =>
  ({ categories, newly, trend, updated })
);

export default connect(selectors, actions)(Footer);
