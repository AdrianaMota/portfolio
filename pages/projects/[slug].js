import { useRouter } from "next/router";
import { projects } from "../../components/Slider/utils/projects";

const ProjectBySlug = () => {
	const { query } = useRouter();

	function isCurrent(img) {
		return img.slug === query;
	}

	const currentProject = projects.find(isCurrent);

	return <div>{JSON.stringify(query)}</div>;
};

export default ProjectBySlug;