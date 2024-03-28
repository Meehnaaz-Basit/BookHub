import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getBooks } from "../utils";
// Custom shape function
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "purple",
    "maroon",
    "magenta",
  ];

  // get books from localStorage
  const readBooks = getBooks();
  if (readBooks.length === 0) {
    return (
      <div className="text-center py-10 rounded-2xl text-4xl font-bold h-[70vh] flex justify-center items-center gap-3">
        <h2>No Read Books</h2>
        <span>📖</span>
      </div>
    );
  }

  // Map read books data
  const chartData = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <BarChart
      width={1200}
      height={600}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar
        dataKey="pages"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default PagesToRead;
