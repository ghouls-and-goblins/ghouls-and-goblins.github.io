import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';
import AccessibleSelector from './../../components/avatar/accessibleSelector';
import { NOMINEE_DATA } from '../../data/nominees'

class AccessibleHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isAuthenticated: false,
            selections: [],
            loginModalVisible: false,
            errorModalVisible: false
        }
    };

    selectNominee = (monsterId) => {
        const { selections } = this.state;

        this.setState({
            selections: [...selections, monsterId]
        });
    }

    renderNominees = () => {
        return (
            <ul className="ghouls-nominee-list">
                { NOMINEE_DATA.map((monster, index) => {
                    const monsterId = monster.id;

                    return <AccessibleSelector
						monster={ monster }
						key={ `monster-${monsterId}` }
						handleOnClick={ () => this.selectNominee(monsterId) } />;
                }) }
            </ul>
        );
    };

    getButtonText = () => {
        const { isAuthenticated } = this.state;

        if (isAuthenticated) {
            return <FormattedMessage id="submitVotes" />;
        }

        return <FormattedMessage id="logIn" />;
    }

    openLogin = () => {
        // TODO: Create login Modal
        // const { modalVisible } = this.state;
        //
        // this.setState({ loginModalVisible: !loginModalVisible });
        const { isAuthenticated } = this.state;

        this.setState({ isAuthenticated: !isAuthenticated });
    }

    submitData = () => {
        const { selections, errorModalVisible } = this.state;
        console.log(selections, errorModalVisible);

        // if (selections.length) {
        //     return this.props.push('/results');
        // }
        //
        // this.setState({ errorModalVisible: !errorModalVisible });
    }

    renderButton = () => {
        const { isAuthenticated } = this.state;
        const buttonAction = isAuthenticated ? this.submitData : this.openLogin;

        return (
            <div className="ghouls-button-row">
                <button
                    type="button"
                    className="ghouls-button"
                    onClick={ buttonAction }>
                    { this.getButtonText() }
                </button>
            </div>
        );
    }

    render() {
        return (
            <section className="ghouls-content">
                <h2 className="ghouls-heading"><FormattedMessage id="homeTitle" /></h2>
                { this.renderNominees() }
                { this.renderButton() }
            </section>
        );
    }
}

export default injectIntl(AccessibleHome);
