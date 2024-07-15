import React from 'react';
import {
  Box,
  Container,
  Heading,
  Highlight,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from '@chakra-ui/react';
import { usePage } from './Navbar';
import { motion } from 'framer-motion';
import bg from '../assets/projects.jpg';

function Access() {
  const { state } = usePage();
  return (
    state.access && (
      <motion.div>
        <Box
          backgroundAttachment="fixed"
          backgroundImage={bg}
          minHeight="670px"
          backgroundPosition="50% 50%"
          height="calc('100vh - 64px')"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            color="white"
            as={motion.div}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
          >
            <Heading textAlign="center">Sandbox Access</Heading>
            <Text>
              Get access to all Sandbox facilities for a whole semester!
            </Text>
          </Stack>
        </Box>
        <Container maxW="container.lg">
          <Box paddingTop="2rem">
            <Heading color="teal" marginBottom="2rem">
              Proposal
            </Heading>
            <Text fontSize="xl">
              <b>
                Sandbox has started accepting proposals for student projects
                only before the start of the semester for Upcoming Semester-I of
                2024-25 year!{' '}
              </b>
              Sandbox can assist projects by means of funding for parts, and an
              array of equipment, from laser cutter to 3D printers,
              microcontrollers to motors. The lab is well equipped to see you
              bring your ideas to reality!
              <b>
                {' '}
                Apply through the{' '}
                <Link
                  color="blue.600"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelN1pYBmSamhTbTcxNO4ngrP2ZRfxZm4K_6hdCKE1kLvUBaA/viewform?usp=sf_link"
                  target="_blank"
                >
                  Project Registration Form
                </Link>{' '}
                now .
              </b>
              <br />Follow the{' '}
              <Link
                color="blue.600"
                href="https://docs.google.com/forms/d/e/1FAIpQLSelN1pYBmSamhTbTcxNO4ngrP2ZRfxZm4K_6hdCKE1kLvUBaA/viewform"
                target="_blank"
              >
                Project Proposal template
              </Link>{' '}
              while submitting your proposal. <br />
            </Text>
          </Box>{' '}
          <Box paddingTop="2rem" fontSize="xl">
            <Heading color="red.500" marginBottom="2rem">
              Terms and Conditions
            </Heading>
            <Text>
              Before applying, the following point must be kept in mind:
            </Text>
            <OrderedList padding="1.5rem">
              <ListItem>
                <Text>
                  This facility is only open to students studying in
                  BITS-Pilani, Goa Campus. If you are a student of another
                  college, please mail us for more information.
                </Text>
              </ListItem>
            </OrderedList>
            <Text>
              While uploading you file for project proposal, it should mention
              the following points:
            </Text>
            <OrderedList padding="1.5rem">
              <ListItem>
                <Text>
                  Detailed description of what is your project, how it works and
                  how it would be useful.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  If more than one members are applying, mention their name,
                  their BITS email address, their branch and the year of study.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Explain why do you require Sandbox access for the completion
                  of your project. Mention the list of equipments you would
                  require to see through your project.
                </Text>
              </ListItem>
              <ListItem>
                <Text>Mention the timeline of your project as well.</Text>
              </ListItem>
              <ListItem>
                <Text>The file should be uploaded in PDF format</Text>
              </ListItem>
            </OrderedList>
          </Box>
        </Container>
      </motion.div>
    )
  );
}

export default Access;
