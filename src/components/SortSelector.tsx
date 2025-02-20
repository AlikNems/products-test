
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

interface SortSelectorProps {
 sortOption: string;
 onSortChange: (value: string) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({
 sortOption,
 onSortChange,
}) => {
 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
   }}
  >
   <FormControl
    sx={{ minWidth: 400, backgroundColor: "#f5f5f5", borderRadius: 2 }}
   >
    <InputLabel sx={{ fontWeight: "bold", color: "#333" }}>Sort By</InputLabel>
    <Select
     value={sortOption}
     label="Sort By"
     onChange={(e) => onSortChange(e.target.value)}
     sx={{
      backgroundColor: "#8e8e8e",
      "&:hover": { backgroundColor: "#9f9f9f" },
      borderRadius: 2,
      boxShadow: 1,
      fontWeight: "bold",
      color: "#333",
      transition: "background-color 0.3s ease",
     }}
     MenuProps={{
      PaperProps: {
       style: {
        backgroundColor: "#8e8e8e",
       },
      },
     }}
    >
     <MenuItem
      value="price-asc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Price: Low to High
     </MenuItem>
     <MenuItem
      value="price-desc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Price: High to Low
     </MenuItem>
     <MenuItem
      value="stock-asc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Stock: Low to High
     </MenuItem>
     <MenuItem
      value="stock-desc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Stock: High to Low
     </MenuItem>
     <MenuItem
      value="brand-asc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Brand: A to Z
     </MenuItem>
     <MenuItem
      value="brand-desc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Brand: Z to A
     </MenuItem>
     <MenuItem
      value="rating-desc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Rating: High to Low
     </MenuItem>
     <MenuItem
      value="reviews-asc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Reviews: Low to High
     </MenuItem>
     <MenuItem
      value="reviews-desc"
      sx={{
       backgroundColor: "#8e8e8e",
       "&:hover": { backgroundColor: "#7a7a7a" },
       "&.Mui-selected": { backgroundColor: "#6b6b6b" },
      }}
     >
      Reviews: High to Low
     </MenuItem>
    </Select>
   </FormControl>
  </Box>
 );
};

export default SortSelector;
