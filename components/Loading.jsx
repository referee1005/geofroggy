import { Skeleton, Box } from "@mui/material";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <Box width="80%" maxWidth="600px">
        {/* Simulate a loading title */}
        <Skeleton variant="text" height={40} width="60%" />

        {/* Simulate a paragraph */}
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="90%" />
        <Skeleton variant="text" height={20} width="70%" />

        {/* Simulate an image or media */}
        <Skeleton
          variant="rectangular"
          height={200}
          sx={{ mt: 2, borderRadius: "8px" }}
        />

        {/* Simulate buttons or actions */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Skeleton
            variant="rectangular"
            height={40}
            width="48%"
            sx={{ borderRadius: "8px" }}
          />
          <Skeleton
            variant="rectangular"
            height={40}
            width="48%"
            sx={{ borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Loading;
