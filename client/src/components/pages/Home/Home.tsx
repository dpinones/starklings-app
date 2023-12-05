import { Box, Link, Typography } from "@mui/material";
import { useGetGroups } from "../../../queries/useGetGroups";
import { CircularProgressCenterLoader } from "../../shared/CircularProgressCenterLoader";
import { IGroup } from "../../../types/group";

export const Home = () => {
  const { data: groups, isLoading: groupsLoading } = useGetGroups();
  return (
    <Box>
      <Typography variant="h2">Starklings App</Typography>
      {groupsLoading && <CircularProgressCenterLoader />}
      <ul>
        {groups &&
          groups.map((group: IGroup) => (
            <li key={group.id}>
              <Typography sx={{mt: 2}}>{group.label}</Typography>
              <ul>
                {group.exercises.map((exercise) => (
                  <li key={exercise.name}>
                    <Link href={`/exercise/${exercise.name}`}>{exercise.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </Box>
  );
};
