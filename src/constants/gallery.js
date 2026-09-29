export const HackathonGallery = Array.from({ length: 20 }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return {
    id: index + 1,
    src: `/gallery/hackathons/hackathon-${num}.jpg`,
    title: `Hackathon Moment ${num}`,
    description: `A memorable moment, experience, and snapshot from hackathon #${index + 1}.`,
  };
});
