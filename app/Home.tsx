import AppHeader from "./AppHeader/AppHeader";
import { Card } from "@/components/ui/card";
import AppTable from "./AppTable/AppTable";
import { useTheme } from "next-themes";

export default function Home() {
	const { theme } = useTheme();

	return (
		<div className={`poppins p-5 ${theme} border w-full min-h-screen`}>
			<Card className="flex flex-col shadow-none p-2">
				<AppHeader />
				<AppTable />
			</Card>
		</div>
	);
}
