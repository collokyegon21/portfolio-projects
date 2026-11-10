function AddProject({ handleSubmit }) {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
              <div className="mb-4">
                <h3 className="fw-bold mb-2">Add Project</h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="projectName"
                    className="form-label fw-semibold"
                  >
                    Project Title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="projectName"
                    name="projectName"
                    placeholder="Enter project title"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="projectDescription"
                    className="form-label fw-semibold"
                  >
                    Project Description
                  </label>
                  <textarea
                    className="form-control rounded-3"
                    id="projectDescription"
                    name="projectDescription"
                    rows="5"
                    placeholder="Describe your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-3"
                >
                  <i className="bi bi-plus-lg me-2"></i>
                  Add Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
