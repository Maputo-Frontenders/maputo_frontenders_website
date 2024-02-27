import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { goals, values } from "./itens";
import GoalImage from "@/assets/purpose/purpose-image.png";
import Image from "next/image";

export const PurposeCard = () => {
  return (
    <Tabs defaultValue="goals" className="w-full">
      <TabsList className="bg-transparent flex gap-2">
        <TabsTrigger
          value="goals"
          className="w-32 text-mf-white bg-mf-least ring-2 "
        >
          Objectivos
        </TabsTrigger>
        <TabsTrigger
          value="values"
          className="w-32 text-mf-white bg-mf-least ring-2 "
        >
          Valores
        </TabsTrigger>
      </TabsList>
      <TabsContent value="goals" className="mt-12">
        <div className="flex justify-between flex-wrap items-center container">
          <div className="flex flex-col gap-4 max-w-lg">
            {goals.map((item) => (
              <div
                className="border-l-2 border-mf-secondaryVariation px-2"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <Image src={GoalImage} alt="" />
        </div>
      </TabsContent>
      <TabsContent value="values" className="mt-12">
        <div className="flex justify-between flex-wrap items-center container">
          <div className="flex flex-col gap-4 max-w-lg">
            {values.map((item) => (
              <div
                className="border-l-2 border-mf-secondaryVariation px-2"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <Image src={GoalImage} alt="" />
        </div>
      </TabsContent>
    </Tabs>
  );
};
