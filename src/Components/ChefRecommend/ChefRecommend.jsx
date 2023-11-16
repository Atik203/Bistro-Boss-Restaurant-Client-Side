const ChefRecommend = ({ item }) => {
  const { name, recipe, image } = item;
  const styles = {
    borderRadius: "8px",
    borderBottom: "3px solid #BB8506",
  };
  return (
    <div
      className="w-[420px]"
      style={{ background: "var(--Dark-07, #F3F3F3)" }}
    >
      <img src={image} alt="" className="w-full h-[300px]" />
      <div className="p-6">
        <h2 className="text-center text-xl font-bold">{name}</h2>
        <p className="text-center justify-center">{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button
            className="btn text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]"
            style={styles}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
