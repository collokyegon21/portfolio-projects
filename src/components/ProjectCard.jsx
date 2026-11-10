function ProjectCard({ project }) {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
      <img
        src="https://placehold.co/300x400?text=Project+Preview"
        className="card-img-top"
        alt="Project placeholder"
        style={{
          height: "100px",
          objectFit: "cover",
        }}
      />

      <div className="card-body p-4 d-flex flex-column">
        <h5 className="card-title fw-bold mb-2">{project.title}</h5>

        <p className="card-text text-secondary small mb-4">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
