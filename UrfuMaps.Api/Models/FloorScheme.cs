﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace UrfuMaps.Api.Models
{
	public class FloorScheme
	{
		[StringLength(10)]
		public string BuildingName { get; set; }
		public int Floor { get; set; }
		public string ImageLink { get; set; }
		public ICollection<PositionScheme> Positions { get; set; }

		public FloorDTO ToDTO()
		{
			return new FloorDTO
			{
				BuildingName = BuildingName,
				Floor = Floor,
				ImageLink = ImageLink,
				Positions = Positions
					.Select(n => n.ToDTO())
					.Where(n => n != null)
					.ToArray()
			};
		}
	}
}
