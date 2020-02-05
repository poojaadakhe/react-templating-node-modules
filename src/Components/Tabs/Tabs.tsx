import React from "react";
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import styles from './Tabs.module.css';
import cx from 'classnames';
export interface Props {
	
}
const Tabs: React.FC<Props> = props => {
    console.log(cx(globalStyles['nav'], globalStyles['nav-tabs']));  
    console.log(globalStyles['nav'], globalStyles['nav-tabs'])
	return (
	<>
        <nav>
            <div className={cx(globalStyles['nav'], globalStyles['nav-tabs'])} id="nav-tab" role="tablist">
                <a className={cx(globalStyles['nav-item'], globalStyles['nav-link'], globalStyles['active'])}  id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                <a className={cx(globalStyles['nav-item'], globalStyles['nav-link'])} id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                <a className={cx(globalStyles['nav-item'], globalStyles['nav-link'])} id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
            </div>
        </nav>
        <div className={cx(globalStyles['tab-content'])} id="nav-tabContent">
            <div className={cx(globalStyles['tab-pane'], globalStyles['fade'], globalStyles['show'] , globalStyles['active'])} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">11111</div>
            <div className={cx(globalStyles['tab-pane'], globalStyles['fade'])} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">222222222</div>
            <div className={cx(globalStyles['tab-pane'], globalStyles['fade'])} id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">333</div>
        </div>
        <hr></hr>

        <div className={cx(globalStyles['dropdown'])}>
        <button className={cx(globalStyles['btn'], globalStyles['btn-secondary'], globalStyles['dropdown-toggle'])}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div className={cx(globalStyles['dropdown-menu'])} aria-labelledby="dropdownMenuButton">
            <a className={cx(globalStyles['dropdown-item'])} href="#">Action</a>
            <a className={cx(globalStyles['dropdown-item'])} href="#">Another action</a>
            <a className={cx(globalStyles['dropdown-item'])} href="#">Something else here</a>
        </div>
        </div>
        <br></br>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
            </div>
            <hr></hr>
        <nav>
        <div className="nav nav-tabs" id="nav-tab1" role="tablist1">
            <a className="nav-item nav-link active" id="nav-home-tab1" data-toggle="tab" href="#nav-home1" role="tab" aria-controls="nav-home1" aria-selected="true">Home</a>
            <a className="nav-item nav-link" id="nav-profile-tab1" data-toggle="tab" href="#nav-profile1" role="tab" aria-controls="nav-profile1" aria-selected="false">Profile</a>
            <a className="nav-item nav-link" id="nav-contact-tab1" data-toggle="tab" href="#nav-contact1" role="tab" aria-controls="nav-contact1" aria-selected="false">Contact</a>
        </div>
        </nav>
        <div className="tab-content" id="nav-tabContent1">
        <div className="tab-pane fade show active" id="nav-home1" role="tabpanel" aria-labelledby="nav-home-tab1">11...</div>
        <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile-tab1">.22..</div>
        <div className="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact-tab1">.3..</div>
        </div>

        {/* https://reactstrap.github.io/ */}
    </>
	);
};

export default Tabs;
