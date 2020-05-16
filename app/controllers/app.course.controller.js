var courses = [
  { id: 1, courseName: "Operating System" },
  { id: 2, courseName: "Programming Fundamental" },
  { id: 3, courseName: "Introduction to Computing" },
  { id: 4, courseName: "Linear Algebra" },
  { id: 5, courseName: "Computer Architecture" },
];

module.exports.create = (req, res) => {
  const course = {
    id: courses.length + 1,
    courseName: req.body.courseName,
  };
  courses.push(course);
  res.send("Added Successfully");
};

module.exports.findAll = (req, res) => {
  res.send(courses);
};

module.exports.findOne = (req, res) => {
  var compare = courses.find((c) => c.id === parseInt(req.params.id));
  if (!compare)
    res.status(404).send("Course doesnt exist on that particular ID");
  res.send(compare);
};

module.exports.update = (req, res) => {
  var compare = courses.find((c) => c.id === parseInt(req.params.id));
  if (!compare)
    res.status(404).send("Course doesnt exist on that particular ID");

  compare.courseName = req.body.courseName;
  console.dir(compare);
  res.send("Updated Successfully");
};

module.exports.delete = (req, res) => {
  var compare = courses.find((c) => c.id === parseInt(req.params.id));
  if (!compare)
    res.status(404).send("Course doesnt exist on that particular ID");

  var index = courses.indexOf(compare);
  courses.splice(index, 1);
  console.log(index);
  res.send("Deleted Successfully");
};
