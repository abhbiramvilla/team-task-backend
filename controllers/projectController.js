import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    createdBy: req.user.id,
    members: [req.user.id]
  });
  res.json(project);
};

export const getProjects = async (req, res) => {
  const projects = await Project.find({ members: req.user.id });
  res.json(projects);
};