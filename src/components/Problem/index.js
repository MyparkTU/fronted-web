import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function InteractiveCard() {
  return (
    <Card
      variant="outlined"
      row
      sx={{
        width: 400,
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.1}>
          ลานจอดรถพัง
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
           ลานจอดรถวิศวกรรมศาสตร์
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          รอดำเนินการ
        </Chip>
      </div>
    </Card>
  );
}
