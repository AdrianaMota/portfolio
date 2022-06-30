import { useRouter } from "next/router";
import { projects } from "../../components/Slider/utils/projects";

const ProjectBySlug = () => {
	const { query } = useRouter();

	// const currentProject = projects.find(callback query);

	return <div>{JSON.stringify(query)}</div>;
};

export default ProjectBySlug;
