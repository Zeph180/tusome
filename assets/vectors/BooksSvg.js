import React from "react";
import Svg, { Path } from "react-native-svg";

export default function BooksSvg({ width, height }) {
	return (
		<Svg width={width} height={height}>
			<Path d="M15.8 17.775H31.6V13.825H15.8V17.775ZM15.8 23.7H23.7V19.75H15.8V23.7ZM15.8 11.85H31.6V7.9H15.8V11.85ZM7.9 31.6V0H39.5V31.6H7.9ZM11.85 27.65H35.55V3.95H11.85V27.65ZM0 39.5V7.9H3.95V35.55H31.6V39.5H0ZM11.85 27.65V3.95V27.65Z" fill="#2855AE"/>
		</Svg>
	);
}
