import { Card } from "@/components/e-learning/academics/StatsCards";
import { BooksSvg, BuildingMarkSvg, TrainingClassSvg } from "@/assets/icons";
import useUnit from "@/hooks/lecturer/useUnit";

const StatsCards = () => {
  const { data: units, isPending } = useUnit();

  const statsData = {
    units: units?.data?.length,
    duration: 0,
    semester: 0,
  };

  return (
    <div className={"flex_row w-full gap-5"}>
      {stats?.map(({ icon, title, desc, key }, ind) => (
        <Card key={ind} icon={icon} desc={desc} title={title} />

        // <Card
        //   key={ind}
        //   icon={icon}
        //   desc={desc}
        //   title={statsData[key]}
        //   isLoading={isPending}
        // />
      ))}
    </div>
  );
};

export default StatsCards;

const stats = [
  {
    title: "6",
    desc: "Current Semester units",
    icon: <BooksSvg />,
    key: "units",
  },
  {
    title: "1",
    desc: "Learning Centres",
    icon: <BuildingMarkSvg />,
    key: "duration",
  },
];
