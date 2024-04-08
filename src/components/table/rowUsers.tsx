import React from "react";
import ButtonUpdateUser from "./buttonUpdateUser";
import ButtonDeleteUser from "./buttonDeleteUser";

function RowUsers(props: any) {
	const { fetchAllUsers, userId, userName, userEmail } = props;

	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
				{userId}
			</th>
			<td className="px-6 py-4">{userName}</td>
			<td className="px-6 py-4">{userEmail}</td>

			<td className="px-6 py-4">
				<ButtonUpdateUser
					fetchAllUsers={fetchAllUsers}
					userName={userName}
					userEmail={userEmail}
					userId={userId}
				/>
			</td>
			<td className="px-6 py-4">
				<ButtonDeleteUser
					fetchAllUsers={fetchAllUsers}
					userId={userId}
				/>
			</td>
		</tr>
	);
}

export default RowUsers;
