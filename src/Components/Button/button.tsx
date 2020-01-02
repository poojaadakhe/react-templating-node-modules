import React from "react";

export interface Props {
	label?: string;
	disabled?: boolean;
	className?: string;
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
		className,
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
				className ||
				"btn btn-primary"
			}
			title={label || "Add Text"}
		>			
			{label ? label : < > Submit </>}
			{ children ? children : <></>}
			{/* {children || (label || "Add Text")} */}
		</button>
	);
};

export default Button;
