import { Construction, Github } from "lucide-react";

import { Button } from "@/components/ui/button";

import Container from "@/components/container";
import Icon from "@/components/shared/icon";

const ComingSoonPage = () => {
  return (
    <Container
      type="div"
      className="h-full flex flex-col items-center justify-center gap-4 text-muted"
    >
      <Container
        type="div"
        className="flex flex-col items-center justify-center text-muted"
      >
        <Icon icon={Construction} size={64} />
        <h1 className="select-none">... will be live soon!</h1>
      </Container>

      <a href="https://github.com/devnadeemashraf/Auctions" target="_blank">
        <Button variant="ghost" size="icon">
          <Github size={24} />
        </Button>
      </a>
    </Container>
  );
};

export default ComingSoonPage;
