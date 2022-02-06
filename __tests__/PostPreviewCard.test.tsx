import { render, screen } from '@testing-library/react'
import moment from 'moment';

import { FrontMatter } from 'types';
import { PostPreviewCard } from "components/PostPreviewCard";

describe('PostPreviewCard', () => {

  const POST_ID = "test-post-id";
  const POST: FrontMatter = {
    title: "Example Post Title",
    date: moment(0).format(),
    abstract: "This is a sample article abstract",
    image:  "https://image-url.com",
  };

  it("Renders the post title", () => {
    render(<PostPreviewCard
      id={POST_ID}
      post={POST}
    />);

    const title = screen.getByRole('heading', {
      name: POST.title,
    })

    expect(title).toBeInTheDocument()
  });

  it("Renders the post abstract", () => {
    render(<PostPreviewCard
      id={POST_ID}
      post={POST}
    />);

    const abstract = screen.getByText(POST.abstract);
    expect(abstract).toBeInTheDocument()
  });

  it("Renders the post image", () => {
    render(<PostPreviewCard
      id={POST_ID}
      post={POST}
    />);

    const img = screen.getByAltText(POST.image!);
    expect(img).toBeInTheDocument()
  });

  it("Matches the snapshot", () => {
    const { container } = render(<PostPreviewCard
      id={POST_ID}
      post={POST}
    />);
    expect(container).toMatchSnapshot()
  })

})
