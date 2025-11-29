'use client';

import { ProductType } from '@/types/ProductType';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Image,
} from '@heroui/react';
import { useRouter } from 'next/navigation';

export default function SmallProductCard({
  _id,
  slug,
  img,
  name,
  description,
  price,
  oldPrice,
}: ProductType) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`products/${slug}`)}>
      <Card
        disableAnimation
        className="w-full  rounded-xl  border-neutral-200 cursor-pointer"
      >
        <CardHeader className="overflow-visible">
          <Image src={img} alt={name} className="object-cover rounded-lg " />
        </CardHeader>

        <CardBody className="flex flex-col gap-2 items-start text-start">
          <h3 className="text-xs font-semibold text-neutral-800 text-start">
            {name}
          </h3>
          <p className="text-[9px] line-clamp-1">{description}</p>
        </CardBody>

        <CardFooter className="flex  flex-col items-start gap-2 pb-4 justify-between">
          <div className="text-neutral-700 flex">
            {oldPrice && (
              <span className="text-sm line-through text-neutral-400 ml-2">
                {oldPrice.toFixed(3)}
              </span>
            )}

            <div className="text-start">
              <span className="text-[9px]">يبدأ من</span>
              <span className="font-bold text-neutral-900 flex items-center gap-1 text-sm">
                {price.toFixed(3)}
                <span className="text-xs font-medium">د.ك.</span>
              </span>
            </div>
          </div>
          <Button
            size="sm"
            radius="full"
            className="text-white font-medium px-12 bg-[#ff7b00] w-full"
            onPress={() => router.push(`products/${slug}`)}
          >
            عرض
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
