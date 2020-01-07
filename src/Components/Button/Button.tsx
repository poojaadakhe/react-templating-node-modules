import React from "react";

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

	return (
		<button
			data-toggle={dataToggle}
			disabled={disabled}
			onClick={clickHandler}
			key={key}
			className={
				classes ||
				"btn btn-primary"
			}
			style={style}
			title={label || "Add Text"}
		>			
			{label ? label : < > Submit </>}
			{ children ? children : <></>}
		</button>
	);
};

export default Button;
