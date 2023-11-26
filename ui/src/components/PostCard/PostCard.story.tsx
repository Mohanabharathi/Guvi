import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PostCard } from ".";
import { defaultLinkProps } from "../Link";
import { MyButton } from "../MyButton";

storiesOf("Post Card", module).add("basic example", () => (
  <div style={{ display: "inline-block" }}>
    <PostCard
      id="12"
      title="i am a title"
      commitId=""
      repo="codeponder"
      repoOwner="benawad"
      topics={["typescript"]}
      creator={{
        id: "1",
        username: "benawad",
        pictureUrl: "https://dummyimage.com/600x400/000/fff",
      }}
      Link={MyButton}
      getLinkProps={() => defaultLinkProps}
    />
  </div>
));
