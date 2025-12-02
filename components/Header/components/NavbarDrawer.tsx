import useSiteConfig from '@/data/configSite';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
  Image,
} from '@heroui/react';
import Link from 'next/link';

export default function NavbarDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { navLinks } = useSiteConfig();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} variant="ghost" isIconOnly className=" border-0">
        {children}
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xs"
        dir="rtl"
        radius="none"
      >
        <DrawerContent>
          <DrawerHeader className="flex flex-col gap-1 items-center p-7">
            <Image src={'Logo.png'} alt="logo" width={150} />
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-2">
              {navLinks[2].subLinks?.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-[#191919] py-1 px-2 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col my-7 gap-4 border-y-1 border-[#dee2e6] py-5 ">
              <Link href="contact-us">اتصل بنا</Link>
              <Link href="mn-nhn">من نحن</Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
