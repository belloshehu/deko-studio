import * as React from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SelectDataType } from "@/types/data.types";

export default function WorkspaceDropdownMenu({
	options,
}: {
	options: SelectDataType[];
}) {
	const [selectedValue, setSelectedValue] = React.useState<string | null>(null);
	console.log("Selected value:", selectedValue);
	return (
		<Select onValueChange={setSelectedValue}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>WorkSpace</SelectLabel>
					{options.map((item, index) => (
						<SelectItem key={index} value={item.value}>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
