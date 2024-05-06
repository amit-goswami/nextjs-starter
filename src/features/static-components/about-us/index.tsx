import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../../shared/components/BackGroundDiv'

export const AboutUsComponent = () => {
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-198px)] overflow-y-scroll">
        <div className="flex align-items-end justify-between">
          <h3 className="text-center font-bold text-xl">About Us</h3>
        </div>
        <div className="w-auto my-4">
          <p className="text-justify my-2">
            At Baha Travels Private Limited, we are a team of experienced
            travelers and problem solvers who are passionate about leveraging
            our deep experience in AI and travel to solve the problems of our
            customers. Our goal is to reduce the cost of travel and ensure
            sustainable travel practices for all.
          </p>
          <h2 className="font-bold text-xl">Mission:</h2>
          <p className="text-justify my-2">
            Our mission is to provide innovative and cost-effective travel
            solutions to our customers, while promoting sustainable travel
            practices that benefit both the environment and the local
            communities we visit.
          </p>
          <h2 className="font-bold text-xl">Vision:</h2>
          <p className="text-justify my-2">
            We envision a world where travel is accessible to all, where
            cultural exchange and exploration are celebrated, and where our
            actions as travelers have a positive impact on the world around us.
          </p>
          <h2 className="font-bold text-xl">Core Values:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Customer-Centric Approach: We prioritize the needs and
              satisfaction of our customers above all else.
            </li>
            <li>
              Innovation: We constantly seek out new and creative ways to
              improve our services and offerings
            </li>
            <li>
              Sustainability: We are committed to promoting sustainable travel
              practices that protect the environment and support local
              communities.
            </li>
            <li>
              Integrity: We conduct our business with honesty, transparency, and
              ethical behavior at all times.
            </li>
          </ul>
          <h2 className="font-bold text-xl">Team:</h2>
          <p className="text-justify my-2">
            Our team is made up of passionate individuals who bring a diverse
            range of skills and expertise to the table. Together, we work
            tirelessly to ensure that our customers have the best possible
            travel experience, while also making a positive impact on the world
            around us.
          </p>
        </div>
      </Container>
    </BackGroundDiv>
  )
}
