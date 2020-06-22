import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import { getDate } from "../utils/getDate";

export default function LineGraph() {
	const data = useSelector((state) => state.User.userVideoFeedback.score_over_time);
	const recursiveFormat = getDate(data);

	return (
		<div>
			<LineChart
				width={window.screen.availWidth > 768 ? 800 : 400}
				height={window.screen.availHeight > 768 ? 600 : 300}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				data={recursiveFormat}>
				<CartesianGrid strokeDasharray="5 5" />
				<XAxis dataKey="created_at" />
				<YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
				<Tooltip />
				<Legend />
				<Line
					strokeWidth="0.3rem"
					type="monotone"
					dataKey="overall_performance"
					stroke="#6954EA"
					dot
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</div>
	);
}
