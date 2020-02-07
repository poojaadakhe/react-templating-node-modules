import React from "react";
import styles from './Button.module.css';

export interface Props {
	label?: string;
	disabled?: boolean;
	classes?: string;
	style?: object;
	dataToggle?: string;
	key?: any;
	clickHandler?: (event: any) => void;
}
const Button: React.FC<Props> = props => {

	
	let {
		label,
		disabled,
		clickHandler,
		children,
		style,
		classes,
		dataToggle,
		key
	} = props;


	console.log({styles});
	
	return (
		<button
			data-toggle={dataToggle}
			disabled={disabled}
			onClick={clickHandler}
			key={key}
			className={
				classes ||
				"artifi btn btn-primary"
			}
			style={style}
			title={label || "Add Texttttteeee"}
		>
			{label ? label : < > Add Texttttteeeee </>}
			{children ? children : <></>}
		</button>
	);
};

export default Button;
